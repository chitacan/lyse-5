# lyse-5

[learn you some erlang](https://learnyousomeerlang.com/) 5번째 발표

## chapters

* [chapter 25. Bears, ETS, Beets](https://learnyousomeerlang.com/ets)
* [chapter 26. Distribunomicon](https://learnyousomeerlang.com/distribunomicon)
* [chapter 27. Distributed OTP Applications](https://learnyousomeerlang.com/distributed-otp-applications)
* [chapter 28. Common Test for Uncommon Tests](https://learnyousomeerlang.com/common-test-for-uncommon-tests)

## development

requires node.js, [now](https://zeit.co/now)

```
$ yarn
$ yarn start
```

## deploy

```
$ yarn deploy
```

## link

* [발표자료](https://lyse-5.chitacan.io)
* [pdf](https://lyse-5.chitacan.io/presentation.pdf)

## trouble shoot

아래와 같은 오류로 `yarn build` 실패시,

```
[err] TypeError: Cannot read property 'update' of null
    at new InnerCodeSurfer (/Users/chitacan/playground/lyse-3/node_modules/mdx-deck-code-surfer/dist/deck-code-surfer.js:93:30)
    at processChild (/Users/chitacan/playground/lyse-3/node_modules/react-dom/cjs/react-dom-server.node.development.js:2750:14)
    at resolve (/Users/chitacan/playground/lyse-3/node_modules/react-dom/cjs/react-dom-server.node.development.js:2716:5)
    at ReactDOMServerRenderer.render (/Users/chitacan/playground/lyse-3/node_modules/react-dom/cjs/react-dom-server.node.development.
js:3100:22)
    at ReactDOMServerRenderer.read (/Users/chitacan/playground/lyse-3/node_modules/react-dom/cjs/react-dom-server.node.development.js
:3059:29)
    at renderToString (/Users/chitacan/playground/lyse-3/node_modules/react-dom/cjs/react-dom-server.node.development.js:3526:27)
    at renderHTML (/Users/chitacan/playground/lyse-3/node_modules/mdx-deck/lib/html.js:65:16)
    at process._tickCallback (internal/process/next_tick.js:68:7)
error Command failed with exit code 1.
```

https://github.com/pomber/code-surfer/issues/8#issuecomment-459971226 적용

> edit `node_modules/mdx-deck/lib/html.js`
>
> ```diff
>    config.externals = [
>     nodeExternals({
>       whitelist: [
>         'mdx-deck',
>         'mdx-deck/themes',
>-        'mdx-deck/layouts'
>+        'mdx-deck/layouts',
>+        'mdx-deck-code-surfer'
>       ]
>     })
>   ]
> ```
