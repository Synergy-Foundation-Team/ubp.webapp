"use client";

import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        การไม่นำพาและการหมิ่นในคุณค่าของสิทธิมนุษยชน
        ยังผลให้มีการกระทำอันป่าเถื่อน
      </p>
      <div>
        <Button color="primary">Click me</Button>
        <Spinner />
        <RadioGroup label="Select your favorite city">
          <Radio value="buenos-aires">Buenos Aires</Radio>
          <Radio value="sydney">Sydney</Radio>
          <Radio value="san-francisco">San Francisco</Radio>
          <Radio value="london">London</Radio>
          <Radio value="tokyo">Tokyo</Radio>
        </RadioGroup>
      </div>
    </main>
  );
}
