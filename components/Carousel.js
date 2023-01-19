//carousels/Bootstrap.js
import { useState } from "react";
import { itemJson } from "../public/items";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BootstrapCarousel() {
  const { bootstrap } = itemJson.items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
    >
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={13000}>
          <div className={styles.wrap}>
            <div>
              <div className={styles.contain}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href="/all-product">
                  <button>View More</button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={item.imageUrl}
                className="w-[80%] md:w-[70%]"
                alt="product"
                width="70%"
                layout="fill"
                priority
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
