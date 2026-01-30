fetch("https://YOUR-RENDER-URL.onrender.com/sarees")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("saree-list");

    data.forEach(s => {
      list.innerHTML += `
        <div class="bg-white rounded-xl shadow hover:scale-105 transition">
          <img src="${s.image}" class="h-64 w-full object-cover rounded-t-xl">
          <div class="p-4">
            <h3 class="font-bold text-lg text-rose-700">${s.name}</h3>
            <p class="text-gray-600">₹${s.price}</p>

            <a href="https://wa.me/91XXXXXXXXXX?text=I want ${s.name}"
               target="_blank"
               class="block mt-4 text-center bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
               WhatsApp Now
            </a>
          </div>
        </div>
      `;
    });
  });
