# Question 1: Reverse a string.
# Question 2: Reverse only the words in a string.
#
# @example
#
#  'Bob Ate Fresh Gummy Karate Monkeys' => 'syeknoM etaraK ymmuG hserF etA boB'
#  'Bob Ate Fresh Gummy Karate Monkeys' => 'Monkeys Karate Gummy Fresh Ate Bob'
#
# @param string [String] String to reverse.
# @param separator [String] Character to reverse on.
# @return string [String] Joined, reversed string.

def reverse(string, separator = '')
  string.split(separator).reverse.join(separator)
end

# Question 3: Find the maximum value in a list of numbers.
#
# @example
#
#  [1, 1, 2, 3, 4, 4, 4, 5, 5] => 5
#
# @param list [Array<Number>] Number list to evaluate.
# @return [Number] Maximum value.

def maximum(list)
  list.max
end
# Question 4: Find the minimum value in a list of numbers.
#
# @example
#
#  [1, 1, 2, 3, 4, 4, 4, 5, 5] => 1
#
# @param [Array<Number>] list - Number list to evaluate.
# @return [Number] - Minimum value.

def minimum(list)
  list.min
end

# Question 5: Calculate the remainder, given a numerator and denominator,
# without using the modulo (%) operator.
#
# @example
#
#  25 % 5 = 5
#
# @param numerator [Number]
# @param denominator [Number]
# @return [Number] Actual remainder amount.

def remainder(numerator, denominator)
  leftover = numerator.fdiv denominator
  (denominator * (leftover - leftover.floor)).ceil
end

# Question 6: Return only unique/distinct values from a list.
#
# @example
#
#  [1, 1, 2, 3, 4, 4, 4, 5, 5] => [1, 2, 3, 4, 5]
#
# @param list [Array<Number>] Number list to evaluate.
# @return [Array<Number>] Unique numbers from evaluated list.

def unique(list)
  list.uniq
end

# Question 7: Return the distinct values from a list as a string, including the
# count of occurrences.
#
# @example
#
#  [1, 1, 2, 3, 4, 4, 4, 5, 5] => '1(2) 2(1) 3(1) 4(3) 5(2)'
#
# @param list [Array<Number>] Number list to evaluate.
# @return [String] Paired number/occurrances.

def distinct_count(list)
  counts = list.each_with_object({}) do |number, hash|
    hash[number] ||= 0
    hash[number] += 1
  end

  counts.to_a.map { |count, number| "#{count}(#{number})" }.join(' ')
end

# Question 8: Given a string of expressions (variable assignments and operators)
# only, and which adheres to the above format, return the results of the
# expressions.
#
# @example
#
#   'a=9 b=1 c=5 d=2 e=9 a / -b + c * d % e' => -8
#
# @param string [String] String to evaluate.
# @return [Number] - Result of evaluation.

def eval_equation(string)
  eval string.gsub(/[[:alpha:]]/) { |m| "@#{m}" }.gsub(/=\d/) { |m| "#{m};" }
end
