import { ModeToggle } from "@/components/mode-toggle";
import { db } from "@/db";
import Image from "next/image";

export default async function Home() {

  const items = await db.query.testing.findMany();

  return (
     <div>
       <ModeToggle />

       {items.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
          );
       })}
     </div>
  );
}
