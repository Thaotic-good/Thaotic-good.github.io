import React from "react";

function ContactInfo() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Email: martina.dong@gmail.com</li>
        <li>Phone number: +420775534688</li>
        <li>
          <a
            className="text-blue-700 underline hover:no-underline"
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fthaotic_good%3Figshid%3DOGQ5ZDc2ODk2ZA%253D%253D%26fbclid%3DIwAR20rKx5q97LySKVHWdb0ajCyMwjigtj8l11E1yY3ziQqclCZ3tQs1fI14c&h=AT2c8QzpsDAXimHfcTIBoZ3ex9fi4mlvSmkcVqktBQfIIYZaANUYTFBDRLMb2xbfAoI1stxHKEYsLHZ03CagU_2X47mB9ywfSXdyPr_5xkpaETi2gkAu4tXP5P0PunXXuuI5KexV"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a className="text-blue-700 underline hover:no-underline" href="https://www.facebook.com/Martina.Cutenowaa" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactInfo;
