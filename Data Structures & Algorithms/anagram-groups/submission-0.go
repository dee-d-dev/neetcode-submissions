func groupAnagrams(strs []string) [][]string {
    groups := make(map[string][]string)
    for _, str := range strs {
        char := strings.Split(str, "")
        sort.Strings(char)
        sortedWord := strings.Join(char, "")

        groups[sortedWord] = append(groups[sortedWord], str)
    }
    
    outputArray := [][]string{}
    for _, value := range groups {
        outputArray = append(outputArray, value)
    }

    return outputArray
}
