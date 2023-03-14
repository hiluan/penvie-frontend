back end:

- get the right data model schema for each category
-

front end:

- keep redux global state the same (like dark/light mode) even when refresh/restart/enter address in the browser by using localstorage: StatePageUpdater.js
- organize translations in the app, use LanguaDetecter.js to get users' browsers' languages.
- redux-persist to update nav
- <Outlet/>
- keep svgs in asset/icons.js

- hard time getting the right route redirecting to /chatgpt after logging in => because Userfront's save bugs => had to contact dev team there.

- passing `headers` to the backend with redux toolkit:

```js
getChatGpt: build.query({
      query(args) {
        return {
          url: `/api/v1/chatgpt`,
          headers: {
            Authorization: `Bearer ${Userfront.accessToken()}`,
          },
        };
      },
      providesTags: ["getChatGpt"],
    }),
```

- passing `headers` to the backend with regular approach:

```js
useEffect(() => {
  (async () => {
    try {
      const result = await fetch("http://localhost:8000/api/v1/chatgpt", {
        headers: {
          Authorization: `Bearer ${Userfront.accessToken()}`,
        },
      }).then((res) => res.json());
      //
    } catch (err) {
      console.log(err);
    }
  })();
}, []);
```
