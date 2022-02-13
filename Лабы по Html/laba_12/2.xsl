<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <tr bgcolor="#CC99CC">
                        <th>имя</th>
                        <th>балл</th>
                        <th>год рождения</th>
                    </tr>
                    <xsl:for-each select="poit/person">
                        <xsl:sort select="birth"/>
                        <tr bgcolor="#FF99CC">
                            <xsl:choose>
                                <xsl:when test="score &lt; 6">
                                    <td bgcolor="red">
                                        <xsl:value-of select="name"/>
                                    </td>
                                </xsl:when>
                                <xsl:when test="score = 6">
                                    <td bgcolor="green">
                                        <xsl:value-of select="name"/>
                                    </td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td>
                                        <xsl:value-of select="name"/>
                                    </td>
                                </xsl:otherwise>
                            </xsl:choose>
                            <td><xsl:value-of select="score"/></td>
                            <td><xsl:value-of select="birth"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>