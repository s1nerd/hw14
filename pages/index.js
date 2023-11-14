import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import gozealForm from "@/components/gozealForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [gozeals, setGozeals] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchGozeals = async () => {
      const res = await fetch("/api/gozeals");
      const data = await res.json();
      setGozeals(data);
      setloading(false);
    };

    fetchGozeals();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.title}>Gozeals</h1>
          <ul>
            {gozeals.map((gozeal) => (
              <li key={gozeal.id}>
                {gozeal.name} - {gozeal.description}
              </li>
            ))}
          </ul>
          <gozealForm
            onGozealCreated={(gozeal) => setGozeals([...gozeals, gozeal])}
          />
        </div>
      </main>
    </>
  );
}
