import "./styles.css";

setInterval(() => {
  if ($("h1").text() === "Schrödinger's cat is dead") {
    $("h1").text("Schrödinger's cat is alive");
  } else {
    $("h1").text("Schrödinger's cat is dead");
  }
}, 1000);
