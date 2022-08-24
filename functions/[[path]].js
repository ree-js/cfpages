export async function onRequestGet(request) {
    // ...
    console.log(request);
    return new Response(`Hello world`);
  }
