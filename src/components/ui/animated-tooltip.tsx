"use client";
import React, { ComponentType, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  selected: boolean;
}

interface MenuItem {
  id: number;
  name: string;
  Component: ComponentType<Props>;
  href: string;
}

export const AnimatedTooltip = ({ items }: { items: MenuItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathName = usePathname();
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 1], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="relative group flex items-center cursor-pointer -mb-2"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={item.href}
            className={clsx(
              'group h-8 w-8 flex items-center justify-center scale-[1] rounded-full cursor-pointer border-1 group-hover:scale-150 group-hover:z-30 border-white relative transition duration-500',
              {
                'dark:bg-[#2F006B] bg-[#EEE0FF]': pathName === item.href,
                'bg-gray-200': pathName !== item.href,
              }
            )}
            // onMouseMove={handleMouseMove}
          >
            <item.Component selected={hoveredIndex === item.id} />
          </Link>
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, x: -20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute left-5 flex text-xs items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-y-1 left-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
                <div className="absolute inset-y-4 left-0 w-[1px] bg-gradient-to-b from-transparent via-sky-500 to-transparent" />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};