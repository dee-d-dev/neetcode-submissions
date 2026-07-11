class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('')
            
            if (!groups.has(sortedStr)) {
                groups.set(sortedStr, [str])
            }else {
                groups.get(sortedStr).push(str)
            }
        }
        let output: string[][] = [];

        for (const [, value] of groups.entries()) {
            output!.push(value)
        }

        return output
    }
}
