'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Chart } from "@/components/ui/charts";
import { Truck, LineChart, Package, ClipboardList } from "lucide-react";
import { useRouter } from 'next/navigation';
import { ChatInterface } from "@/components/ui/chat-interface";

// Monthly sales data
const monthlySalesData = [
  { name: 'Jan', value: 186 },
  { name: 'Feb', value: 305 },
  { name: 'Mar', value: 237 },
  { name: 'Apr', value: 73 },
  { name: 'May', value: 209 },
  { name: 'Jun', value: 214 },
];

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  return (
    <div className="flex-1 p-8 pt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-blue-400">Dashboard</h2>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Button
          className="h-24 bg-gray-900 border-gray-800 hover:bg-gray-800 text-gray-200 hover:text-blue-400"
          onClick={() => {}}
        >
          <LineChart className="mr-2 h-6 w-6" />
          Sales
        </Button>

        <Button
          className="h-24 bg-gray-900 border-gray-800 hover:bg-gray-800 text-gray-200 hover:text-blue-400"
          onClick={() => router.push('/stock')}
        >
          <Package className="mr-2 h-6 w-6" />
          Add Stock
        </Button>

        <Button
          className="h-24 bg-gray-900 border-gray-800 hover:bg-gray-800 text-gray-200 hover:text-blue-400"
          onClick={() => router.push('/orders')}
        >
          <ClipboardList className="mr-2 h-6 w-6" />
          Track Orders
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Left Side - Chart and Chat */}
        <div className="flex gap-6 flex-1">
          {/* Monthly Sales Chart */}
          <Card className="flex-1 bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Chart
                data={monthlySalesData}
                type="bar"
                height={400}
                color="#3b82f6"
                title="Bar Chart - Label"
                subtitle="January - June 2024"
              />
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <div className="w-[400px]">
            <ChatInterface />
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-6">
          <Card className="w-[400px] bg-red-900/20 border-red-800/30">
            <CardHeader>
              <CardTitle className="text-red-200">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Printer Paper A4", stock: 23, threshold: 50 },
                  { name: "Ink Cartridge Black", stock: 5, threshold: 20 },
                  { name: "USB Cables", stock: 12, threshold: 30 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none text-red-100">
                        {item.name}
                      </p>
                      <p className="text-sm text-red-200/70">
                        Stock: {item.stock} / {item.threshold}
                      </p>
                    </div>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/20"
                      onClick={() => router.push('/orders')}
                    >
                      <Truck className="mr-2 h-4 w-4" />
                      Re-order
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-[400px] bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full"
                fromDate={new Date()}
                showOutsideDays={false}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
