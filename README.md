# nick-maingott-website

Personal website for Mikhail Kovach

---

## Technologies & libraries

- Next.js
- Node.js
- TypeScript
- Tailwind CSS
- framer-motion
- Google API
- Vercel Analytics
- Google Analytics

```bash
node.js: 20.20.2
```

---

## Getting Started

```bash
npm install
```

### (OPTIONAL) : Add .env file to the root project

```bash
touch .env
```

### (OPTIONAL) : Add your Google API key inside .env file.

> used by `/api/userInfoByIP` to look up the zip code; without it the zip code might always be "00000"

> make sure you enabled Geolocation to this API

```yaml
NEXT_PUBLIC_KEY_GOOGLE_API="your API key"
```

### Start the development server

```bash
npm run dev

npm run build
```

---

## API Description :

the following endpoint will return a json object contains a bunch of information about the ip address

```api
/api/userInfoByIP/[IP-Address]
```

**example** :

```api
/api/userInfoByIP/159.89.173.104
```

###### **_Get Request to above endpoint will return the following json data :_**

```json
{
  "zip": "560002",
  "country": "India",
  "countryCode": "IN",
  "region": "KA",
  "regionName": "Karnataka",
  "city": "Bengaluru",
  "datetime": "9/6/2022, 1:24:30 AM",
  "lat": 12.9634,
  "lon": 77.5855,
  "timezone": "Asia/Kolkata",
  "isp": "DigitalOcean, LLC",
  "org": "Digital Ocean",
  "as": "AS14061 DigitalOcean, LLC",
  "query": "159.89.173.104"
}
```

---

&copy; 2026 All rights reserved.
