<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head><title>XSLT</title></head>
            <body>
                <h2>FIT</h2>
            <table border="1">
                <tr bgcolor="#ffc0cb">
                    <th>NAME</th>
                    <th>TIME</th>
                    <th>EXAM</th>
                    <th>PAGES</th>
                    <th>PASSING</th>
                </tr>
                <xsl:for-each select="FACULTY/SPECIALIZATION">
                    <xsl:sort select="PAGES"/>
                <tr>
                    <td><xsl:value-of select="NAME"/></td>
                    <td><xsl:value-of select="TIME"/></td>
                    <td><xsl:value-of select="EXAM"/></td>
                    <td><xsl:value-of select="PAGES"/></td>
                    <td><xsl:value-of select="PASSING"/></td>
                </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
