---
layout: default
title: トップ / JavaScriptレベル1
description: トップ / JavaScriptレベル1　基礎文法1
---

# JavaScript レベル1


<div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
  <div class="list-group">
  {% for page in site.pages %}
    {% if page.identifier == 'study' %}
    <a href="{{ page.url | relative_url }}" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">{{ page.title }}</h6>
          <p class="mb-0 opacity-75">S{{ page.title }}</p>
        </div>
        <small class="opacity-50 text-nowrap">★</small>
      </div>
    </a>
    {% endif %}
  {% endfor %}
  </div>
</div>