$(".friend-drawer-onhover").on("click", function () {
  console.log("clicked");
  $(".chat-bubble").hide("slow").show("slow");
});

$(".menu").on("click", () => {
  $(".menu-options").toggle("1000");
});

$(".chats").on("click", () => {
  $(".drawer").toggle("1000");
});
