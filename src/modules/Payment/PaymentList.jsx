import { Flex } from "@chakra-ui/react";
import React from "react";

import { PAYMENT_BUTTONS } from "./PaymentApi";
import PaymentBtn from "./PaymentBtn";

export default function PaymentList() {
  return (
    <Flex
      w="1320px"
      h={"345px"}
      position={"absolute"}
      bottom="80px"
      justifyContent="start"
      columnGap="24px"
      rowGap="25px"
      alignItems="center"
      flexWrap="wrap"
    >
      {PAYMENT_BUTTONS.map((payment) => (
        <PaymentBtn key={payment.id} {...payment} />
      ))}
    </Flex>
  );
}
