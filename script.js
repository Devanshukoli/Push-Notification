// it will select button for clicing and taking varous action...
const button = document.querySelector("button");

// Now if you click on button it will start the action to take...
button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    // alert(perm)
    if (perm === "granted") {
      const notification = new Notification("Example notification", {
        // Inside the notifcation below types of action you can defined.
        body: "this notification will be appeared when you click on button.", // It will show the content of notification
        data: { hello: "World" },
        icon: "github.png",
        tag: "Welcome Messageg", // It will overwrite the current notification
      });
      notification.addEventListener("error", (e) => {
        // Here using console.log you can check and inspect that the events will be logged and will show there... for that just use "error" => "show".
        // console.log(e)
        alert("error");
      });
    }
  });

  // Example Usage of notification.
  // Here in below event if you change or go to new tab it will show message "come back"...
  let notification;
  let interval;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      const leaveDate = new Date();
      interval = setInterval(() => {
        notification = new Notification(
          "Come back please",
          {
            body: `You have gone for ${Math.round(new Date() - leaveDate)/1000} seconds~`,
            tag: "come back~",
          },
          100
        );
      });
    } else {
      if (interval) clearInterval(interval);
      if (notification) notification.close();
    }
  });
});
