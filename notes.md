## State

Store one value in the calculator model for the current result. When 

We only need to do three operands, and only when it's + then * (not * then +). 

Clear: clears all the buffers, operands, operators, etc. 

After you press equals, it displays the result. Then, once you start typing again, it should clear. 


First operand: can enter in a number, then an operator changes the state. Can't press equals, but can press clear. 

Second operand: Can press * to go to the third operand, or equals to calculate the result. 

At the third operand, all you can do is press equals or clear. 

OK WAIT. 
They're smart to store the evaluation in the buffer. 

Control flow: 
