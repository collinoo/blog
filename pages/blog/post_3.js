import Layout from "./../../components/Layout";
import Post from "../../components/post/post";

const postTwo = () => {
  return (
    <Layout>
      <Post title={title} codeBlock={codeBlock} description={description} />
    </Layout>
  );
};

const title = "Bash line count";
const description = "Cool neato way of iterating over all the lines of a file";
const codeBlock = `
#!/bin/bash
# Simple line count example, using bash

#
# Usage: ./line_count.sh file
# ----------------------------

# Link filedescriptor 10 with stdin
exec 10<&0
# stdin replaced with a file supplied as a first argument
exec < $1
# remember the name of the input file
in=$1

# init
file="current_line.txt"
let count=0

# this while loop iterates over all lines of the file
while read LINE
do
    # increase line counter 
    ((count++))
    # write current line to a tmp file with name $file
    echo $LINE > $file
    # this checks the return code of echo
    if [ $? -ne 0 ] 
     then echo "Error in writing to file \$\{file\};
    fi
done

echo "Number of lines: $count"
echo "The last line of the file is: 'cat \$\{file\}'"

# Note: You can achieve the same by just using the tool wc like this
echo "Expected number of lines: 'wc -l $in'"

# restore stdin from filedescriptor 10
# and close filedescriptor 10
exec 0<&10 10<&-
`;

export default postTwo;
