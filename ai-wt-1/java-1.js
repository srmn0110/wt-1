const form = document.getElementById('order-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const address = document.getElementById('address').value;
  const items = document.getElementById('items').value;

  console.log(`Order placed for ${items} to be delivered to ${address}`);
});
