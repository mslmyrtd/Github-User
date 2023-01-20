<h2  align="center">Github-User</h2>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
 <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
 <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />

</p>

<br>

## Used Stack :

- #### React.js
- #### TypeScript
- #### Axios library
- #### AuthO
- #### Fushion Chart
- #### Styled-Component
- #### React-İcons
- #### Github-Api
- #### React Router Dom
<details><summary><b>Project Description</b></summary><br>
  <p>Hello everybody,
    in this project, i will build an app that allows the visitor to search Github users and display some useful info about the Github user, like the amount of repos list of followers, most star repo and etc. 
  </p>
</details>
<details><summary><b>Github API</b></summary><br>

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

</details>

<details><summary><b>Installation Instructions</b></summary><br>

<summary>You must have the Node.js and npm  installed before this steps.For more[Node.js](https://nodejs.org/en/download/) </summary><br/>

1. Clone the Repo:

```

$ git clone https://github.com/mslmyrtd/SmartPulse.git

$ cd SmartPulse

```

2. Install the app with the help of `package.json`:

```
$ yarn install
```

or with npm

```
$npm i
```

3. Start the server :

```
$ yarn build
$yarn start
```

    with npm

```
$ npm run build
$npm run start
```

Default Express.js routes are start with /api
Graphql routes starts with /graphql

</details>

<details><summary><b>Deployment </b></summary><br>

Deployed at Netlify @ <br> https://react-github-usersapp.netlify.app/
Graphql queries can be done at @

Check collection with Postman : <br>

<p  align="left">

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/23b635b4e7b2192c870b)
  
[Netlify](https://www.netlify.com/)

## Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)

</p>
  
</details>
<details><summary><b>Testing </b></summary><br>

After cloning the app and installation process please run :

```
$yarn test
```

</details>

<details><summary><b>Other</b></summary><br>

## Authors

👤 Müslüm Yurtada

- Github: [https://github.com/mslmyrtd)

## How to contribute ?

Contributions, issues and feature requests are welcome!
Feel free to check issues page.

Fork it (https://github.com/mslmyrtd/SmartPulse/fork) <br>
Create your working branch (git checkout -b [choose-a-name]) <br>
Commit your changes (git commit-m "commit") <br>
Push to the branch (git push origin [chosen-name]) <br>
Create a new Pull Request

</details>
