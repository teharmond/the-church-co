import { Badge } from "@the-church-co/ui/badge";
import Image from "next/image";
import Link from "next/link";
import HeroButtons from "./hero-buttons";

const heroImage = "/hero-image.png";

export default function hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <div className="mx-auto h-full w-full max-w-6xl px-4 pt-24">
        <div className="flex flex-col gap-6 md:gap-8">
          <Link href="/free-church-websites" className="w-fit">
            <Badge className="rounded-full bg-secondary px-4 py-1 text-sm font-normal text-primary">
              We build church websites for free
            </Badge>
          </Link>
          <h1 className="max-w-2xl text-balance text-4xl font-bold md:text-6xl">
            Websites that connect your Church community
          </h1>
          <p className="max-w-2xl text-balance text-lg font-medium md:text-xl">
            The Church Co is the complete digital platform for your church
            helping you reach new people and engage your members.
          </p>
          <HeroButtons />
        </div>
      </div>

      <Image
        src={heroImage}
        alt="The Church Co"
        width={1000}
        height={1000}
        className="w-full max-w-7xl"
      />
    </div>
  );
}
