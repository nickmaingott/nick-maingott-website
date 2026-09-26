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
- cookie-cutter
- react-leaflet
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

> not Adding Google API to the project will cause not returning the correct zip code, it might be always "00000"

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

##### Endpoint 1 :

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

##### Endpoint 2 :

the following endpoint will return a json object contains the zip code for the latitude and logitude

```api
"/api/userInfoByLatLon/" + lat + "/" + lon
```

**example** :

```api
/api/userInfoByIP/159.89.173.104
```

###### **_Get Request to above endpoint will return the zipcode of the lat and long provided :_**

```json
{ "zipcode": "56998" }
```

###### **_the Response below is returned if the lat and long provided has no zip code in Google maps, like lat & long in positioned in the ocean :_**

```json
{ "zipcode": "00000" }
```

##### Endpoint 3 :

the following endpoint will return a json object contains "quote" and "author", for SpeedTyping project i displayed only the quote, **minLength** is considered as the minimum of characters.

```api
/api/typing/[minLength]
```

##### notes :

- **_minLength_** should be between 10 - 300.
- the returned quote is a chain of
- i costumized the original Endpoint using The API Route of Nextjs, here is the Original Endpoint.

##### Original Endpiont :

###### URL :

```api
https://api.quotable.io/random?minLength=[minLength]
```

---

&copy; 2026 All rights reserved.
