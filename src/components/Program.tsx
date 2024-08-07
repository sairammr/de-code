import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark'; 
import "../index.css";

export default function Program() {
    const navigate = useNavigate();

    const handleback = (): void => {
        navigate('/', { replace: true });
    };

    return (
        <>
            <span onClick={handleback}>
                <h2 style={{ paddingLeft: '5%' }}>&#60; Go Back</h2>
            </span>
            <div className="program-main">
                <div className="program-left">
                    <span className="program-sub">
                        <h3>Section</h3>
                        <h3>MCQ</h3>
                        <h3>Programming</h3>
                    </span>
                </div>
                <div className="program-right">
                    <div className="program-right-header">
                        {/* Header content can be added here */}
                    </div>
                    <div className="program-right-question">
                        <div style={{ color: 'black',paddingLeft:"3%" }}>
                            <h1 style={{ fontSize: '20px', fontWeight: '700' }}>First and Last Position of an Element In Sorted Array</h1>

                            {/* Problem statement and other details */}
                            <h2>Problem Statement</h2>
                            <p>
                                You have been given a sorted array/list ARR consisting of 'N' elements. You are also given an integer 'K'.
                                Now, your task is to find the first and last occurrence of 'K' in ARR.
                            </p>

                            <h3>Note:</h3>
                            <ol>
                                <li>If 'K' is not present in the array, then the first and the last occurrence will be -1.</li>
                                <li>ARR may contain duplicate elements.</li>
                            </ol>

                            <p>
                                For example, if ARR = [0, 1, 1, 5] and K = 1, then the first and last occurrence of 1 will be 1 (0-indexed) and 2.
                            </p>

                            <h2>Input Format</h2>
                            <p>
                                The first line of input contains an integer 'T' which denotes the number of test cases or queries to be run. Then the test cases follow.
                                The first line of each test case contains two single-space separated integers 'N' and 'K', respectively.
                                The second line of each test case contains 'N' single space-separated integers denoting the elements of the array/list ARR.
                            </p>

                            <h2>Output Format</h2>
                            <p>
                                Return two single-space separated integers denoting the first and the last occurrence of 'K' in ARR, respectively.
                            </p>

                            <h3>Note:</h3>
                            <p>
                                You do not need to print anything; it has already been taken care of. Just implement the given function.
                            </p>

                            <h2>Constraints:</h2>
                            <ul>
                                <li>1 &lt;= T &lt;= 100</li>
                                <li>1 &lt;= N &lt;= 5000</li>
                                <li>0 &lt;= K &lt;= 10^5</li>
                                <li>0 &lt;= ARR[i] &lt;= 10^5</li>
                                <li>Time Limit: 1 second</li>
                            </ul>

                            <h2>Sample Input 1:</h2>
                            <pre>
                                2
                                6 3
                                0 5 5 6 6 6
                                8 2
                                0 0 1 1 2 2 2 2
                            </pre>

                            <h2>Sample Output 1:</h2>
                            <pre>
                                -1 -1
                                4 7
                            </pre>

                            <h3>Explanation Of Sample Output 1:</h3>
                            <p>
                                For the first test case, 3 is not present in the array. Hence the first and last occurrence of 3 is -1 and -1.
                                For the second test case, the first occurrence of 2 is at index 4 and last occurrence is at index 7.
                            </p>

                            <h2>Sample Input 2:</h2>
                            <pre>
                                2
                                4 0
                                0 0 0 0
                                1 2
                                2
                            </pre>

                            <h2>Sample Output 2:</h2>
                            <pre>
                                0 3
                                0 0
                            </pre>
                        </div>
                    </div>
                <div style={{display:"flex"}}>
                    <div className="program-right-console">
                        
                        <SyntaxHighlighter language="typescript" style={solarizedDark}>
                            {`function findOccurrences(arr: number[], k: number): [number, number] {
    let first = -1;
    let last = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            if (first === -1) first = i;
            last = i;
        }
    }

    return [first, last];
}`}
                        </SyntaxHighlighter>
                        
                      
                    </div>
                    <div className='output-display'>
                        <p>-1 -1 4 7</p>
                        <p>Test Cases Passed ✅</p>
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
}
