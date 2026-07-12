func topKFrequent(nums []int, k int) []int {
    numsMap := make(map[int]int)

    for _, num := range nums {
        _, exists := numsMap[num]

        if !exists {
            numsMap[num] = 1
            continue
        }

        numsMap[num]++
    }

    // var output []int
    // for key, value := range numsMap {
    //     if value >= k {
    //         output = append(output, key)
    //     }
    // }
    keys := make([]int, 0, len(numsMap))

    for key := range numsMap {
        keys = append(keys, key)
    }

    sort.Slice(keys, func(i, j int) bool {
        return numsMap[keys[i]] > numsMap[keys[j]]
    })

    if k > len(keys) {
        k = len(keys)
    }

    return keys[:k]
}