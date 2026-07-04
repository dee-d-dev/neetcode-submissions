class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) {
            return false
        }

        const charCount = new Map<string, any>

        for (const alphabet of s) {
            charCount.set(alphabet, (charCount.get(alphabet) || 0) + 1)
        }

        for (const alphabet of t) {
            if(!charCount.has(alphabet)) {
                return false
            }

            const count = charCount.get(alphabet)

            if (count == 1) {
                charCount.delete(alphabet)
            } else {

                charCount.set(alphabet, count - 1)
            }
        }

        return charCount.size == 0
    }
}
