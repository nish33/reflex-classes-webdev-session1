/**
 * Major Methods:
 * 1. setItem(itemname, values) : To set an item in local storage
 * 2. getItem(itemname) : To retrieve an item from local storage
 * 3. removeItem(itemname) : To remove an item from local storage
 */
/**
 * Task:
 * When user clicks submit on contact form, set following information to local storage as of object.
 * 1. Name
 * 2. Email
 * 3. Number
 * 4. Message
 * If contact form is filled more than once, append the information of each submit in previously stored data.
 */
const submitBtn = document.querySelector('input[type="submit"]');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(!validateFields()) return;
  const prevData = JSON.parse(localStorage.getItem("portfolioContactFormData"));
  console.log(prevData);

  if (prevData && prevData.length > 0) {
    prevData.push({
      id: prevData.length + 1,
      name: document.querySelector('input[name="fullname"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      message: document.getElementById("message").value,
    });
    localStorage.setItem("portfolioContactFormData", JSON.stringify(prevData));
    document.querySelector('input[name="phone"]').value = "";
    return document.getElementById("contactForm").reset();
  }

  const data = [
    {
      id: 1,
      name: document.querySelector('input[name="fullname"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      message: document.getElementById("message").value,
    },
  ];
  localStorage.setItem("portfolioContactFormData", JSON.stringify(data));
  document.querySelector('input[name="phone"]').value = "";
  return document.getElementById("contactForm").reset();
});
