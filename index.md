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
      <i class="fa-solid fa-book-open-reader" style="font-size:32px"></i>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          {% assign titles = page.title | split: "/" %}
          <div class="mb-0 h5 text-start">{{titles[0]}}</div>
          <p class="mb-0 opacity-75 h6 text-start ms-5">{{titles[1] | strip }}</p>
        </div>
        <small class="opacity-50 text-nowrap">{{ page.url}}</small>
      </div>
    </a>
    {% endif %}
  {% endfor %}
  </div>
</div>
