package handler

import (
	"io/ioutil"
	"net/http"
	"time"
)

func sendError(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte(err.Error()))
}

func Handler(w http.ResponseWriter, r *http.Request) {
	url := "https://vostel.de/de/volunteering/projects?limit=24&city=Berlin&sublocality_level_1=Bezirk%20Friedrichshain-Kreuzberg"

	client := http.Client{
		Timeout: time.Second * 2, // Maximum of 2 secs
	}

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		sendError(w, err)
		return
	}

	// require json
	req.Header.Set("accept", "application/json")

	res, getErr := client.Do(req)
	if getErr != nil {
		sendError(w, err)
		return
	}

	body, readErr := ioutil.ReadAll(res.Body)
	if readErr != nil {
		sendError(w, err)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(body)
}
