# NKG Auto Repair Site

## Google reviews setup

The homepage reviews section uses the Google Places API (v1 Place Details) to load live rating and top reviews.

Create a `.env` file in the project root:

```bash
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
VITE_GOOGLE_PLACE_ID=your_google_place_id
```

Notes:
- Enable Places API for your Google Cloud project.
- Restrict your API key by HTTP referrer for security.
- Restart `npm run dev` after adding/changing env values.
