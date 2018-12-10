if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then("registration",function(){
    console.log(`Service worker registration was successful: ${registration.scope}`);
  }).catch(function(error){
    console.log(`Service worker registration has sadly failed: ${error}`);
  });
}