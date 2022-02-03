$(document).ready(function () {
  // search
  $("#job-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".jobs-card > div  ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // filter
  $("#main-select").on("change", function () {
    // $("#cities").empty();
    // $("#compaines").empty();

    if ($("#main-select").val() == "cities")
      $("#cities")
        .append("<option>Sana'a</option><option>Aden</option>")
        .fadeIn(2000);
    else
      $("#companies")
        .append("<option>United Nations</option><option>DU Monde</option>")
        .fadeIn(2000);
  });
  $("#filter-btn").click(function () {
    $("#cities").empty();
    $("#companies").empty();
  });
  $("body").css("text-align", "left");

  // language
  $(".language-select").on("change", function () {
    if ($(".language-select").val() == "en") {
      $("body").css("text-align", "left");
      $("body").css("direction", "ltr");
    } else if ($(".language-select").val() == "ar") {
      $("body").css("text-align", "right");
      $("body").css("direction", "rtl");
    }
  });
});

$(document).ready(function () {
  $("#cv").click(function (e) {
    e.preventDefault();
    window.location.href = "../shatha adel ali .pdf";
  });
});
