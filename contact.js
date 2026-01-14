$("#send-email").on("click", function (e) {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (!name || !email || !message) {
        alert("please fill in all fields!");
        return; 
    }

    const subject = encodeURIComponent("Reaching Out! - " + name);
    const body = encodeURIComponent(
      message + "\n\n\n" + "Best,\n\n" + name + "\n" + email
    );

    const mailto = `mailto:melindxl@uci.edu?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank");

    $("#name, #email, #message").val("");
});