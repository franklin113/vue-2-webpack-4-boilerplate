# Vue 2 application with webpack 4 boilerplate
# Ready to be inserted into eventfinity

## Description
Webpack is configured to output only a single file with *no* vendor dependancies.
Vue is an external, which means we need to add that to the index.html to be inserted into the outputted html template.

## Output Example

The HTML output looks like this- It provides a region to copy and paste into eventfinity, plus a helper todo comment to show where you should insert your script url.

```
  <!-- #region  COPY INTO EVENTFINIY-->
  
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>

  <div class="wrapper" id="nmr-app">
    <div is="main-app"></div>
  </div>
  <!-- #endregion -->

  <!-- TODO -- replace /main.js with a url to your script -->
  <script type="text/javascript" src="/main.js"></script>
```

## Instructions for app builders
Add external dependancies into the /index.html.  (not /dist/index.html)
This uses the webpack html plugin, so that /index.html will be built and copied over to the /dist/index.html.
We want to keep this main bundle lightweight. 