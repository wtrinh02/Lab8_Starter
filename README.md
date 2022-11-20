# Lab 8 - Starter

1. I would fit my automated tests within a Github action that runs whenever code is pushed. This makes sure that the code is continuosly being checked for errors, instead of waiting to look for bugs after development is complete. Also running automated tests in Github actions instead of manually will save you time.
2. No, I wouldn't use E2E testing to check if a function is returning the correct output. This is because you would have to wait for the whole program to run before you can see an error. I would rather use something liek Unit testing to make sure a function works.
3. No, I believe that the "message" feature is too large and is made up of multiple different components that could be tested individually by unit tests but not as a whole.
4. I would use a unit test to test the "max message length" becuase it can be as simple as returning a boolean value that compares if the length is less than the max.