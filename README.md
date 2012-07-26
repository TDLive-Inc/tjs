tjs
===

An open JavaScript website engine that everyone can learn and hack on!

---
Installing
===
Installing is as easy as downloading the source tarball (or zipball) and uploading your files to your web server (or cloning the repository and renaming dl.html to index.html)

Then, edit the ps() (page source) function according to your needs, such as:

```
function ps(page, src){
if(page == "home") return "this is the home page";
else if(page == "hamburgers") return "<h1>I LIKE HAMBURGERS</h1>";
else return "<h1>NOT FOUND BRAH</h1>";
}
```

Or, for example, if you wanted the home page to show "hamburgers", you could do:

```
function ps(page, src){
if(page == "home") return ps("hamburgers");
elseif(page == "hamburgers") return "<h1>I LIKE HAMBURGERS</h1>";
}
```

NOTE: if you still need quotes, use quot, like this:

```
function ps(page, src){
quot = '"';
if(page == "home") return "this is so called " + quot + "TJS" + quot + ".";
}
```
---
Firebug Lite is included and licensed under the New BSD license;
```
Copyright (c) 2012, Mozilla
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the organization nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Mozilla BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

This software is licensed under the Creative Commons BY-NC-SA license, available at http://creativecommons.org/licenses/by-nc-sa/3.0