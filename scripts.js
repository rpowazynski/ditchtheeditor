{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const\cf0 \strokec4  textarea = document.getElementById(\cf5 \strokec5 'writingArea'\cf0 \strokec4 );\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  saveButton = document.getElementById(\cf5 \strokec5 'saveButton'\cf0 \strokec4 );\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 textarea.addEventListener(\cf5 \strokec5 'keydown'\cf0 \strokec4 , (e) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  ([\cf5 \strokec5 'Backspace'\cf0 \strokec4 , \cf5 \strokec5 'Delete'\cf0 \strokec4 , \cf5 \strokec5 'ArrowLeft'\cf0 \strokec4 , \cf5 \strokec5 'ArrowRight'\cf0 \strokec4 , \cf5 \strokec5 'ArrowUp'\cf0 \strokec4 , \cf5 \strokec5 'ArrowDown'\cf0 \strokec4 ].includes(e.key)) \{\cb1 \
\cb3         e.preventDefault();\cb1 \
\cb3     \}\cb1 \
\cb3 \});\cb1 \
\
\cb3 saveButton.addEventListener(\cf5 \strokec5 'click'\cf0 \strokec4 , () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  text = textarea.value;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  blob = \cf2 \strokec2 new\cf0 \strokec4  \cf6 \strokec6 Blob\cf0 \strokec4 ([text], \{ type: \cf5 \strokec5 'text/plain'\cf0 \strokec4  \});\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  link = document.createElement(\cf5 \strokec5 'a'\cf0 \strokec4 );\cb1 \
\cb3     link.href = \cf6 \strokec6 URL\cf0 \strokec4 .createObjectURL(blob);\cb1 \
\cb3     link.download = \cf5 \strokec5 'writing.txt'\cf0 \strokec4 ;\cb1 \
\cb3     link.click();\cb1 \
\cb3 \});\cb1 \
\
}