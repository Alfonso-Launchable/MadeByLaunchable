<script>
  $(document).ready(function(){
    $("#contactForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/hello@temalaunchable.com",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#contactForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
        },
        error: function(){
          console.log("Failure. Try again.");
        }
      });
    });
  });
</script>