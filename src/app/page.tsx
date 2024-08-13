"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const [select, setSelete] = useState(0);
  return (
    <div className="home">
      <div className="box-home">
        {select == 0 ? (
          <div className="login">
            <div className="logo-image">
              <Image
                src={"/people.png"}
                width={128}
                height={128}
                alt="Loading"
                className="Image"
                placeholder="empty"
              />
            </div>
            <form action="" method="post" className="form">
              <div className="box-email">
                <div className="input-email">
                  <Image
                    src={"/user.png"}
                    width={24}
                    height={24}
                    alt="Loading"
                  />
                  <input type="text" placeholder="JohnDoe@gmail.com" />
                </div>
              </div>
              <div className="box-email">
                <div className="input-email">
                  <Image
                    src={"/padlock.png"}
                    width={24}
                    height={24}
                    alt="Loading"
                  />
                  <input type="password" placeholder="Your Password" />
                </div>
              </div>
              <div className="box-email">
                <div className="input-submit">
                  <button>Click</button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="Register">
            
          </div>
        )}
      </div>
    </div>
  );
}
