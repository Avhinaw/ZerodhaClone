import React from "react";
import Para from "./Para";
import Peopleimg from "./Peopleimg";

export default function People() {
  return (
    <div className="w-[68vw] h-full pb-5 m-auto">
      <h4 className="text-center text-2xl text-gray-700 font-semibold pb-20">
        People
      </h4>
      <div className="flex gap-12 justify-center w-full">
        <div className="space-y-4 text-center object-cover">
          <img
            className="rounded-full"
            src="https://zerodha.com/static/images/nithin-kamath.jpg"
            alt="nithin"
          />
          <p>Nithin Kamath</p>
          <p>Founder, CEO</p>
        </div>
        <div className="space-y-5 w-[68%] text-lg text-gray-600">
          <Para text="Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. " />
          <Para text="He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)." />
          <Para text="Playing basketball is his zen." />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-36 text-center py-18">
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Nikhil.jpg"
          name="Nikhil Kamath"
          designation="Co-founder & CFO"
          bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Kailash.jpg"
          name="Dr. Kailash Nadh"
          designation="CTO"
          bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Venu.jpg"
          name="Venu Madhav"
          designation="COO"
          bio="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Hanan.jpg"
          name="Hanan Delvi"
          designation="CCO"
          bio="We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Seema.jpg"
          name="Seema Patil"
          designation="Director"
          bio=" Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/karthik.jpg"
          name="Karthik Rangappa"
          designation="Chief of Education"
          bio="Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <Peopleimg
          imgUrl="https://zerodha.com/static/images/Austin.jpg"
          name="Austin Prakesh"
          designation="Director Strategy"
          bio=" Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        />
      </div>
    </div>
  );
}
