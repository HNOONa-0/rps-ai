# What is this ?
A challenge between the player and four bots to a rock-paper-scissors game! It's built using React(18.2.0) and Brain.js(2.0.0-beta.23).

The first bot (M0) chooses hands to play randomly, this approach doesn't utilize patterns made by the player and naturally performs poorly.

Each of the other bots has its own unique mechanism of predicting the player's next hand and playing the opposite to maximize their wins against the player.

M1 compares the last three hands made by the player with earlier sub-sequences to make an educated guess about the player's next hand.

M2 utilizes a simple Markov Chain model by keeping count of every two consecutive hands made by the player. Using the players last hand, picks the most likely next hand of the player based on the frequency of these sub-sequences.

M3 employs an LSTM (Long Short-Term Memory) machine learning model made available by Brain.js library. This enables M3 to learn and adapt to the player's changing patterns and strategies, resulting in more accurate predictions of the player's next hand.

To enable the latter bots to outperform the first bot, the player must participate in a significant number of rounds. This allows the latter bots to adapt to the player's patterns and changes in strategy. In theory, M3 should outperform all other bots as the number of rounds becomes large.

Feel free to check out the website and challenge yourself against these bots!