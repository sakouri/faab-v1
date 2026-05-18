#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# Read file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Strategy: Find the problematic section and fix it
# Current: </p> </div> (no hp-savoir-body div opening, Nous analysons paragraph orphaned)
# Target: Add Nous paragraph to col-right, then close and open hp-savoir-body

# Find FAAB Architecte et ses équipes section
pattern = r'(FAAB Architecte et ses équipes vous accompagnent par une approche structurée et réaliste à chaque étape de votre projet\.)\s*</p>\s*</div>'

replacement = r'''                        \1
                    </p>
                    <p class="hp-left-copy">
                        Nous analysons l'ensemble de vos besoins, vos contraintes ainsi que vos ambitions afin de définir un cadre d'intervention pertinent, viable.
                    </p>

                </div>

                <div class="hp-savoir-body fade-in-up">'''

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Now remove the orphaned "Nous analysons" paragraph that currently appears outside any div
pattern2 = r'                    <p class="hp-left-copy">\s*Nous analysons l\'ensemble[^<]*</p>'
content = re.sub(pattern2, '', content)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML structure fixed")
