# LifeApp client application

MASTER ![Build status](https://travis-ci.org/g3f4-xyz/lifeapp-client.svg?branch=master)

 - React UI
 - Relay as data provider
 - Service Worker with WebPush notifications
 - Material-UI components

## Setup

### Auth

Auth provider dashboard: https://manage.auth0.com/
Login using g3f4.lifeapp@gmail.com

Fill config in .env
```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-client-id
REACT_APP_AUTH0_AUDIENCE=https://your-api-identifier
```

To get domain and clientId go to applications and open LifeApp application
To get audience go to APIs and open lifeapp-api custom api and copy identifier


