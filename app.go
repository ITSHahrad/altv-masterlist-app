package main

import (
	"context"
	"encoding/json"
	"io"
	"net/http"

	Configs "github.com/itshahrad/altv-masterlist-app/app/pkg/configs"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) FetchServers() ([]Configs.Servers, string) {
	req, err := http.NewRequest("GET", Configs.API_URL, nil)

	if err != nil {
		return nil, "failed to create request!"
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return nil, "failed to request to server!"
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, "failed to read body from response!"
	}

	var servers []Configs.Servers

	if err := json.Unmarshal(body, &servers); err != nil {
		return nil, "failed to parse body to json"
	}

	return servers, ""
}
