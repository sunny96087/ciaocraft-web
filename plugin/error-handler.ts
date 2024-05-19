export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log(error);
    // handle error, e.g. report to a service
  };

  nuxtApp.hook("vue:error", (error, instance, info) => {
    console.log(error);
    // handle error, e.g. report to a service
  });
});
