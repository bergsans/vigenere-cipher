import Data.Char

shift (senLetter, keyLetter) fn = chr $ start + (ord senLetter `fn` ord keyLetter) `mod` azLength
  where
    start = ord 'A'
    azLength = 26

-- encode "ATTACKATDAWN" "LEMON" -> LXFOPVEFRNHR
encode sentence key = map (`shift` (+)) $ zip sentence $ cycle key

-- decode "LXFOPVEFRNHR" "LEMON" -> ATTACKATDAWN
decode sentence key = map (`shift` (-)) $ zip sentence $ cycle key


