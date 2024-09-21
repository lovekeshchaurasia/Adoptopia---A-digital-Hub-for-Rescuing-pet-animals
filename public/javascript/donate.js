var orderId;
    $(document).ready(function () {
      var settings = {
        "url": "/create/OrderId",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "amount": "100"
        }),
      };

      $.ajax(settings).done(function (response) {

        var options = {
          "key": "rzp_test_YxNwtBdLGDL0Pr", // Enter the Key ID generated from the Dashboard
          "amount": response.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Apple",
          "description": "Think Different",
         
          "order_id": response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "handler": function (response) {
            var settings1 = {
              "url": "/api/payment/verify",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Content-Type": "application/json"
              },
              "data": JSON.stringify({ response }),
            }
          

          $.ajax(settings1).done(function(response){
            if(response == true){
              alert("Payment Successful")
            }else{
              alert("Payment Failed")
            }
e          })
          },
        
          "notes": {
            "address": "Razorpay Corporate Office"
          },
          "theme": {
            "color": "#3399cc"
          }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        document.querySelector('.rzp-button1').onclick = function (e) {
          rzp1.open();
          e.preventDefault();
        }

        orderId = response.id;
        console.log(response.id);
        $("button").show();
      });
    });