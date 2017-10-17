# Technical Questions
This repository contains technical questions for candidates to answer. The original set of questions were [sourced from Stack Overflow][6]. Any future additions should adhere to the precept of the Bene Gesserit [gom jabbar][1], the high-handed enemy:

> I observed you in pain, lad. Pain's merely the axis of the test. Your mother's told you about our ways of observing. I see the signs of her teaching in you. Our test is crisis and observation.

Your additions should be both reasonably difficult and quick to finish. The point of the test must always be to observe and learn the candidate's methods and thought processes as we supply inceasingly complex problems. A good test **never** tries to eliminate a candidate through [arbitrary hardness][2].

Answers for the below problems are included for:

* JavaScript: [answers.js](answers.js)
* Ruby: [answers.rb](answers.rb)

A public markdown document for the candidate may be found in [this GitHub gist][5].

## Rules

1. Tests shouldn't run over ninety minutes.
2. Tests should help us learn, not eliminate.
3. Google? Stack Overflow? Go wild! Whatever works.
4. Don't be afraid to ask for help or pipe up about a problem.

## Resources

* [How to recognize a good programmer?][3]

### Problem 1
Reverse all characters in a string.

    'Only Bob Ate Fresh Gummy Karate Monkeys' => 'syeknoM etaraK ymmuG hserF etA boB ylnO'

### Problem 2
Reverse the order of words in a string.

    'Only Bob Ate Fresh Gummy Karate Monkeys' => 'Monkeys Karate Gummy Fresh Ate Bob Only'

### Problem 3
Find the maximum value in a list of numbers.

    [1, 1, 7,  2, 3, 4, 4, 4, 5, 5] => 7

### Problem 4
Find the minimum value in a list of numbers.

    [1, 1, 2, 3, 4, 4, 4, -9, 5, 5] => -9

### Problem 5
Calculate the actual remainder of a division, given a numerator and denominator, without using the modulo (`%`) operator or equivalent function.

    25 % 10 = 5

### Problem 6
Return only unique/distinct values from a list of numbers.

    [1, 1, 2, 3, 4, 4, 4, 5, 5] => [1, 2, 3, 4, 5]

### Problem 7
Return the distinct values from a list of numbers as a string, joined with the count of occurrences.

    [1, 1, 2, 3, 4, 4, 4, 5, 5] => '1(2) 2(1) 3(1) 4(3) 5(2)'

### Problem 8
Given a string of expressions (variable assignments and operators) only, and which adheres to the below format, return the results of the expressions.

    'a=9 b=1 c=5 d=2 e=9 a / -b + c * d % e' => -8

## License
Copyright (c) 2017 [GirlCrew Limited][3]. Original questions (c) 2008 [MBCook][7]. See [LICENSE](LICENSE) for details.

[1]: http://dune.wikia.com/wiki/Gom_Jabbar "Gom Jabbar"
[2]: http://www.jasonbock.net/jb/News/Item/7c334037d1a9437d9fa6506e2f35eaac "If Carpenters Were Hired Like Programmers"
[3]: https://www.girtlcrew.com "GirlCrew"
[4]: https://softwareengineering.stackexchange.com/questions/33816/how-to-recognize-a-good-programmer "How to recognize a good programmer?"
[5]: https://gist.github.com/bhalash/a8d93592c4ecefbbcec789f43728f8a2 "Fiendishly-Difficult Candidate Questions (Muahahahahaha)"
[6]: https://stackoverflow.com/questions/117812/alternate-fizzbuzz-questions/117891#117891 "Alternate FizzBuzz Questions"
[7]: https://stackoverflow.com/users/18189/mbcook "MBCook"
